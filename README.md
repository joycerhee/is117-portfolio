# The NJ Defense & Pharma UX Portfolio

**Live Link:** https://joycerhee.github.io/portfolio

## Project Overview

This portfolio showcases a junior frontend developer with UX focus, tailored for New Jersey defense tech and pharmaceutical hiring teams. It includes responsive, accessible UI, case studies, and a lead-gen contact form built with HTML, CSS, and JavaScript.

## Orchestration Log

During the build, Copilot generated the contact form with a submit handler that displayed a success message ("Your request has been received") but never actually sent the data anywhere — no email integration, no backend, no mailto link. The form looked like it worked but silently did nothing. I caught this during testing and added a mailto fallback so the form actually opens the user's email client with the message pre-filled, ensuring the CTA functions on submission.