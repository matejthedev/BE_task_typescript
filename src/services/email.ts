import nodemailer from 'nodemailer';
import {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  MAIL_SERVICE,
  MAIL_TITLE,
} from '../constants';

export const sendEmail = async (email: string, joke: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: MAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: MAIL_TITLE,
      text: joke,
    };

    await transporter.sendMail(mailOptions);
    return SUCCESS_MESSAGES.EMAIL_SENT;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.EMAIL_NOT_SENT);
  }
};
