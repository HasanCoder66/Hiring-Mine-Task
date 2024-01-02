export const jobPosting = async (req, res) => {
  try {

    const description = req.body.description;

    // Regular expression to match email addresses
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    
    // Extracting email addresses from the description using the regex
    const extractedEmails = description.match(emailRegex);
    
    // Regular expression to match phone numbers
    const phoneRegex = /\b\d{10}\b|\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g;
    
    // Extracting phone numbers from the description using the regex
    const extractedPhoneNumbers = description.match(phoneRegex);
    
    // Logging or using the extracted contact information
    if (extractedEmails) {
      console.log("Extracted Email Addresses:", extractedEmails);
    }
    
    if (extractedPhoneNumbers) {
      console.log("Extracted Phone Numbers:", extractedPhoneNumbers);
    }
    
    // You can use or send these extracted contact information as needed
    
    //  { $push: { likes: req.body.userId } }
    
  } catch (error) {
    console.log(error);
  }
};

// app.post("/post-job", (req, res) => {
//   // Validate the data if needed
// });
