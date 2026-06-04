# Navigation Audit - BootMovement Demo Hardening

## Summary of Findings
- **Total Links Scanned**: ~350
- **Broken/Placeholder Links**: High concentration of `href="#"` across all dashboard pages.
- **Missing Routes**: `/auth/recovery` and `/citizen/contributions` (Now implemented).
- **Orphan Pages**: None detected yet.

## Audit Details

### High Risk Areas
- **Sidebars**: Almost all sidebar items in recently implemented dashboard pages use `href="#"`.
- **Footers**: Legal and Platform links in footers use `href="#"`.
- **CTAs**: Many "Learn More" or "View All" buttons use `href="#"`.

## Fix Status
- [x] Implement `/auth/recovery`
- [x] Implement `/citizen/contributions`
- [x] Replace `href="#"` in `src/app/party/page.tsx`
- [x] Replace `href="#"` in `src/app/my-communities/page.tsx`
- [x] Replace `href="#"` in `src/app/my-contributions/page.tsx`
- [x] Replace `href="#"` in `src/app/my-profile/page.tsx`
- [x] Replace `href="#"` in `src/app/petitions/page.tsx`
- [x] Replace `href="#"` in `src/app/policy-discussions/page.tsx`
- [x] Replace `href="#"` in `src/app/projects/[id]/page.tsx`
- [x] Replace `href="#"` in `src/app/surveys/page.tsx`
- [x] Replace `href="#"` in `src/app/town-halls/page.tsx`
- [x] Replace `href="#"` in `src/app/communities/[id]/page.tsx`
- [x] Replace `href="#"` in `src/app/narrative/page.tsx`
- [x] Replace `href="#"` in `src/app/admin/dashboard/page.tsx`
- [x] Replace `href="#"` in `src/app/campaign/page.tsx`
- [x] Replace `href="#"` in `src/app/candidates/page.tsx`
- [x] Replace `href="#"` in `src/app/citizen/dashboard/page.tsx`
- [x] Replace `href="#"` in `src/app/community/directory/page.tsx`
- [x] Replace `href="#"` in `src/app/learning/page.tsx`
- [x] Replace `href="#"` in `src/app/movement/page.tsx`
- [x] Replace `href="#"` in `src/app/page.tsx`
