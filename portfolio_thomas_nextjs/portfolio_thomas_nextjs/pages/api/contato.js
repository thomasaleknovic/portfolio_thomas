export default async (req, res) => {
  let nodemailer = require("nodemailer");

  const data = JSON.parse(req.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: "ThomasCode <thomas@thomascode.com.br>",
      to: "thomas@thomascode.com.br",
      subject: `Nova mensagem de ${data.nome}`,
      html: `
      <div>
      <h1>Mensagem de ${data.nome}</h1>
      <h3>${data.email}</h3>
      <p>${data.text}</p>
      </div>
          `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
