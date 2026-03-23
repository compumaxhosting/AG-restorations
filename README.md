# AG Restorations

Next.js website for AG Restorations with a validated contact form and Resend email delivery.

## Contact Form + Resend Setup

### 1. Create your local env file

Copy `.env.example` to `.env.local`.

PowerShell:

```powershell
Copy-Item .env.example .env.local
```

### 2. Add your Resend values in `.env.local`

Set these keys:

```env
RESEND_API_KEY=re_your_real_key
CONTACT_TO_EMAIL=you@yourdomain.com
CONTACT_CC_EMAIL=
CONTACT_BCC_EMAIL=
CONTACT_FROM_EMAIL=AG Restorations <onboarding@resend.dev>
```

Notes:

- `RESEND_API_KEY`: Create in Resend dashboard.
- `CONTACT_TO_EMAIL`: Primary lead recipients. Supports multiple emails separated by commas, semicolons, or spaces.
- `CONTACT_CC_EMAIL`: Optional CC recipients. Supports multiple emails with the same separators.
- `CONTACT_BCC_EMAIL`: Optional BCC recipients. Supports multiple emails with the same separators.
- `CONTACT_FROM_EMAIL`: Sender. Use `onboarding@resend.dev` for quick testing, then switch to your verified domain sender.

### 3. Run the project

```bash
npm install
npm run dev
```

Open http://localhost:3000 and submit the contact form.

### 4. What is validated

Validation is done on both client and server:

- Name: min 2 characters
- Email: valid email format
- Phone: 10 to 15 digits
- Service: must be one of available options
- Message: min 20 characters

Files involved:

- `src/components/HomeContactForm.tsx`
- `src/lib/contact-schema.ts`
- `src/app/api/contact/route.ts`

## Production Checklist

- Verify your sending domain in Resend.
- Update `CONTACT_FROM_EMAIL` to a sender on that verified domain.
- Add same env vars in your hosting provider (Vercel/server).
