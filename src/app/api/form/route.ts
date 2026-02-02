import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  competitie: z.enum(["dames", "heren"]),
  teamnaam: z.string().min(2),
  teamverantwoordelijke: z.string().min(2),
  email: z.string().email(),
  telefoon: z.string().min(6),
  opmerkingen: z.string().optional().default(""),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = schema.parse(json);

    const to = process.env.MAIL_TO;
    const from = process.env.MAIL_FROM;

    if (!to || !from) {
      return Response.json(
        { ok: false, error: "MAIL_TO or MAIL_FROM missing in env" },
        { status: 500 }
      );
    }

    const subject = `VKH Tornooi inschrijving – ${data.teamnaam} (${data.competitie})`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height:1.5">
        <h2>Nieuwe inschrijving Voetbaltornooi</h2>
        <p><b>Competitie:</b> ${data.competitie}</p>
        <p><b>Teamnaam:</b> ${data.teamnaam}</p>
        <p><b>Teamverantwoordelijke:</b> ${data.teamverantwoordelijke}</p>
        <p><b>E-mail:</b> ${data.email}</p>
        <p><b>Telefoon:</b> ${data.telefoon}</p>
        <p><b>Opmerkingen:</b><br/>${(data.opmerkingen || "").replaceAll("\n", "<br/>")}</p>
      </div>
    `;

    // 1) Mail naar organisatie
    await resend.emails.send({
      from,
      to,
      subject,
      replyTo: data.email,
      html,
    });

    // 2) Bevestiging naar inschrijver (optioneel maar nice)
    await resend.emails.send({
      from,
      to: data.email,
      subject: `Bevestiging inschrijving – ${data.teamnaam}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui; line-height:1.5">
          <p>We hebben jullie inschrijving goed ontvangen.</p>
          <p><b>Team:</b> ${data.teamnaam} – <b>${data.competitie}</b></p>
          <p>Betalingsinfo volgt via mail. Bedankt!</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 400 }
    );
  }
}
