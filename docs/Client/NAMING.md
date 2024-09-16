# React Project Naming Convention

## Folder Grouping & Naming Conventions:

- **`src/`:** The root of all project-related files and folders.
- **`assets/`:** Stores static assets like images, fonts, and global stylesheets.
- **`components/`:** Contains reusable components grouped into:
    - **`feature-specific folders/`:** Components specific to a particular feature (e.g., `forms`, `input`).
- **`contexts/`:** All React context files for global state management (e.g., authentication, theme).
- **`hooks/`:** Custom hooks used across the project.
- **`pages/`:** Page-level components representing different routes.
- **`services/`:** Handles external API calls or other service-like functions (e.g., authentication, user services).
- **`utils/`:** Utility functions used across the project.

## File Naming Conventions:

- **Component files** (`.tsx`): Always use lowercase letters and separate words with hyphens(-) for files.
    - Example: `red-button.component.tsx`

- **Context files**: Suffix files with `.context.ts`.
    - Example: `auth.context.ts`, `theme.context.ts`

- **Service files**: Suffix files with `.service.ts`.
    - Example: `auth.service.ts`, `user.service.ts`

- **Custom hooks**: Always start with "use" and lowercase.
    - Example: `useAuth.ts`, `useFetch.ts`

- **Utility files**: Use descriptive lowercase names with hyphens if multiple words.
    - Example: `format-date.ts`, `parse-query.ts`

## 4. Component Naming Convention:

- Component filenames are lowercase, but the exported component should be **PascalCase**.
    - Example: A component in `button.tsx` would be:
      ```tsx
      // button.tsx
      const Button = () => {
        return <button>Click me</button>;
      };
      
      export default Button;
      ```