'use server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
});

export async function sendConfirmationCode({ to, subject, generatedCode }) {
  try {
    await transporter.sendMail({
      from: `"Fasco Store" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html: `
      <p>Здравствуйте!</p>
      <p>Вы запросили сброс пароля. Пожалуйста, используйте следующий код подтверждения, чтобы продолжить:</p>
      <h2 style="color: #333; fint-weight: bold'; font-size: 20px">🔑 ${generatedCode}</h2>
      <p>Если вы не запрашивали сброс пароля, просто проигнорируйте это письмо.</p>
      <br />
      <p>С уважением,<br/>Команда поддержки Fasco.</p>
    `,
    });

    return { success: 'Письмо с кодом отправлено', error: null };
  } catch (error) {
    console.error(error);
    return { error: 'Ошибка при отправке письма', success: null };
  }
}
