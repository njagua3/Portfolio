export async function submitContactForm(formData) {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.',
    };
  }
}