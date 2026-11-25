# Dental care

This website is delivered as a static HTML/CSS/JavaScript project.

## Pages and routes
- `index.html` — home
- `about.html` — about
- `services.html` — services/menu
- `gallery.html` — gallery
- `contact.html` — contact and enquiry form
- `404.html` — not-found page (configure your host to use it)

## Data and form behavior
Enquiry forms validate in the browser and save submissions to this site's own localStorage key: `01-dental-clinic-requests-v1`. This keeps this site's demo data separate from the other seven websites and from unrelated pages. Data stays in the visitor's browser and is not sent to the business.

## Production integration still required
For real multi-user records, server-side validation, email delivery, reservations, payments, or authentication, connect a backend/API and database. Do not use browser localStorage as a production database. Configure your hosting platform's 404 fallback to `404.html`.


## Audit and deployment notes
- This is a static HTML/CSS/JavaScript demo; enquiries are stored in browser localStorage under a site-specific key. They are not transmitted to a business inbox and can be cleared by the visitor.
- Do not collect sensitive information through this demo form. For production, connect a server endpoint with server-side validation, spam/rate limiting, access control, retention rules, and a privacy notice.
- Authentication, database CRUD, payment processing, live appointment/reservation availability, email delivery, and secure file uploads are not implemented because no backend or provider credentials were supplied.
- Configure the permanent production domain, canonical URLs, XML sitemap, analytics consent (if analytics are added), and host-level 404 fallback before launch.
- Replace editable sample business copy, operating hours, service details, and contact information with verified business information before publishing.
