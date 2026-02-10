import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  teamnaam: z.string().min(2),
  teamverantwoordelijke: z.string().min(2),
  email: z.string().email(),
  telefoon: z.string().min(6),
  opmerkingen: z.string().optional().default(""),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function nl2br(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br/>");
}

function emailShell(title: string, content: string, subtitle?: string) {
  return `
    <div style="margin:0;padding:24px;background:#eef3fb;">
      <div style="max-width:680px;margin:0 auto;border:1px solid #d5e0f3;border-radius:16px;overflow:hidden;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#17345f;">
        <div style="padding:20px 24px;background:linear-gradient(145deg,#2e5daa,#4f79c1);color:#ffffff;">
          <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-weight:700;opacity:0.9;">Heindonk Feest</p>
          <h1 style="margin:10px 0 0;font-size:22px;line-height:1.25;">${title}</h1>
          ${subtitle ? `<p style="margin:10px 0 0;font-size:13px;line-height:1.5;opacity:0.95;">${subtitle}</p>` : ""}
        </div>
        <div style="padding:20px 24px 24px;">${content}</div>
      </div>
    </div>
  `;
}

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

    const registrationFee = "EUR 20";
    const paymentUrl =
      process.env.KUBBEN_PAYMENT_URL || "https://heindonk-feest.weticket.io";

    const subject = `VKH WK Kubben inschrijving - ${data.teamnaam}`;
    const opmerkingen = data.opmerkingen?.trim() || "Geen opmerkingen";

    const orgHtml = emailShell(
      "Nieuwe inschrijving WK Kubben",
      `
        <div style="border:1px solid #dbe5f5;border-radius:12px;padding:14px 16px;background:#f7faff;">
          <table role="presentation" style="width:100%;border-collapse:collapse;">
            <tbody>
              <tr><td style="padding:7px 0;color:#4d6488;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Ploegnaam</td><td style="padding:7px 0;text-align:right;font-size:14px;font-weight:700;color:#17345f;">${escapeHtml(data.teamnaam)}</td></tr>
              <tr><td style="padding:7px 0;color:#4d6488;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Verantwoordelijke</td><td style="padding:7px 0;text-align:right;font-size:14px;font-weight:700;color:#17345f;">${escapeHtml(data.teamverantwoordelijke)}</td></tr>
              <tr><td style="padding:7px 0;color:#4d6488;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">E-mail</td><td style="padding:7px 0;text-align:right;font-size:14px;font-weight:700;color:#17345f;">${escapeHtml(data.email)}</td></tr>
              <tr><td style="padding:7px 0;color:#4d6488;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Telefoon</td><td style="padding:7px 0;text-align:right;font-size:14px;font-weight:700;color:#17345f;">${escapeHtml(data.telefoon)}</td></tr>
            </tbody>
          </table>
        </div>
        <div style="margin-top:14px;border:1px solid #dbe5f5;border-radius:12px;padding:14px 16px;background:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;color:#4d6488;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Opmerkingen</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#17345f;">${nl2br(opmerkingen)}</p>
        </div>
      `
    );

    await resend.emails.send({
      from,
      to,
      subject,
      replyTo: data.email,
      html: orgHtml,
    });

    const attendeeHtml = emailShell(
      "Inschrijving ontvangen",
      `
        <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#17345f;">Bedankt voor jullie inschrijving voor WK Kubben.</p>
        <div style="border:1px solid #dbe5f5;border-radius:12px;padding:14px 16px;background:#f7faff;">
          <p style="margin:0;font-size:13px;color:#4d6488;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Ploeg</p>
          <p style="margin:8px 0 0;font-size:16px;color:#17345f;font-weight:700;">${escapeHtml(data.teamnaam)}</p>
        </div>
        <p style="margin:14px 0 0;font-size:14px;line-height:1.6;color:#17345f;">
          Belangrijk: jullie inschrijving is pas officieel nadat het inschrijvingsgeld werd betaald en jullie een bevestigingsmail van de organisatie hebben ontvangen.
        </p>
        <div style="margin-top:14px;border:1px solid #dbe5f5;border-radius:12px;padding:14px 16px;background:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;color:#4d6488;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Betaalgegevens</p>
          <p style="margin:0;font-size:14px;line-height:1.8;color:#17345f;">
            Bedrag: <strong>${escapeHtml(registrationFee)}</strong><br/>
            Betaling via: <strong>WeTicket</strong><br/>
            Link: <a href="${escapeHtml(paymentUrl)}" target="_blank" rel="noreferrer" style="color:#1f4e97;font-weight:700;">${escapeHtml(paymentUrl)}</a><br/>
            Mededeling: <strong>${escapeHtml(data.teamnaam)}</strong>
          </p>
        </div>
        <p style="margin:14px 0 0;font-size:14px;line-height:1.6;color:#17345f;">
          Na ontvangst van de betaling sturen we jullie de definitieve bevestiging via e-mail.
        </p>
      `,
      "WK Kubben VK Heindonk"
    );

    await resend.emails.send({
      from,
      to: data.email,
      subject: `Bevestiging inschrijving WK Kubben - ${data.teamnaam}`,
      html: attendeeHtml,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 400 }
    );
  }
}
