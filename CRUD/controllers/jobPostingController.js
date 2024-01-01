export const jobPosting = async (req, res) => {
  try {
    const jobPostings = [];

    const { email, contact, description } = req.body;

    const newJobPosting = { email, contact, description };

    jobPostings.push(newJobPosting);
    console.log(newJobPosting)

//    await newJobPosting.save()
//     .then(savedJobPosting => {
//       res.json({ message: 'Job posted successfully!', jobPosting: savedJobPosting });
//     })
//     .catch(error => {
//       res.status(500).json({ error: 'Error saving job posting to the database.' });
//     });
//     res.json({
//       message: "Job posted successfully!",
//       jobPosting: newJobPosting,
//     });
  } catch (error) {
    console.log(error);
  }
};

// app.post("/post-job", (req, res) => {
//   // Validate the data if needed
// });
