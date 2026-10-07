
import { GoogleGenAI } from "@google/genai";
import { Job, User } from '../types';

// FIX: Aligned GoogleGenAI initialization with the provided coding guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCoverLetter = async (job: Job, user: User): Promise<string> => {
  const model = 'gemini-2.5-flash';

  const prompt = `
    Generate a professional and concise cover letter for a job application. The tone should be enthusiastic but professional.

    **My Profile:**
    - Name: ${user.name}
    - Headline: ${user.headline}
    - Key Skills: ${user.skills.join(', ')}
    - Experience: ${user.experience}
    - Summary: ${user.resumeSummary}

    **Job Details:**
    - Job Title: ${job.title}
    - Company: ${job.company}
    - Job Description: ${job.description}
    - Key Responsibilities: ${job.responsibilities.join(', ')}
    - Key Qualifications: ${job.qualifications.join(', ')}

    Please write a 3-paragraph cover letter based on the information above. Tailor it to highlight how my skills and experience align with the job requirements. Address it to "the Hiring Manager at ${job.company}". Do not include contact information placeholders like [Your Phone Number] or [Your Address]. Just write the body of the letter.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating cover letter:", error);
    return "I'm sorry, but I encountered an error while generating the cover letter. Please try again.";
  }
};
