export const jobPosting = async (req, res) => {
  try {
    const description = req.body.description;

    // Regular expression to match email addresses
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    // Regular expression to match phone numbers
    const phoneRegex = /\+\s?\d{3}\s?\d{3}\s?\d{4}/g;
    const phoneRegex2 = /0\d{9}/g;
    // Extracting email addresses from the description using the regex
    const extractedEmails = description.match(emailRegex);

    var matchedNumbers1 = description.match(phoneRegex);
    var matchedNumbers2 = description.match(phoneRegex2);

    // Logging or using the extracted contact information
    if (extractedEmails) {
      console.log("Extracted Email Addresses:", extractedEmails);
    }

    if (matchedNumbers1) {
      console.log("Extracted Phone Numbers:", matchedNumbers1);
    }
    if (matchedNumbers2) {
      console.log("Extracted Phone Numbers:", matchedNumbers2);
    }
    //  { $push: { likes: req.body.userId } }
  } catch (error) {
    console.log(error);
  }
};
