"use client"

import { useState, FormEvent } from "react"

interface FormState {
  loading: boolean
  message: string
  error: boolean
}

export const useFormSubmit = (apiUrl: string) => {
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    message: "",
    error: false,
  })

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setFormState({
      loading: true,
      message: "",
      error: false,
    })

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    // Convert FormData to URL-encoded string for Google Apps Script
    const formEntries = Array.from(formData.entries())
    const urlEncodedData = formEntries
      .map(([key, value]) => encodeURIComponent(key) + "=" + encodeURIComponent(value as string))
      .join("&")

    try {
      // Using fetch with no-cors mode for Google Apps Script
      await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData,
        mode: "no-cors", // Required for Google Apps Script
      })

      // Since we're using no-cors, we can't actually read the response
      // So we'll assume success and show a confirmation message
      setFormState({
        loading: false,
        message: "Thank you for your inquiry! We'll get back to you soon.",
        error: false,
      })
      
      form.reset()
    } catch (error) {
      console.error("Form submission error:", error)
      
      setFormState({
        loading: false,
        message: "There was an error submitting your inquiry. Please try again or contact us directly.",
        error: true,
      })
    }
  }

  return {
    ...formState,
    submitForm,
  }
}
