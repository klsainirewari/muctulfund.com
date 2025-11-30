# Mutual Fund Distributor Website

This is a professional Mutual Fund Distributor website built with **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 How to Run Locally

To run this project on your computer, you need [Node.js](https://nodejs.org/) installed.

1.  **Create a Vite Project**:
    Open your terminal and run:
    ```bash
    npm create vite@latest my-fund-app -- --template react-ts
    cd my-fund-app
    ```

2.  **Install Dependencies**:
    Install the required libraries:
    ```bash
    npm install lucide-react @google/genai
    ```

3.  **Setup Tailwind CSS**:
    Follow the [Tailwind CSS Vite Guide](https://tailwindcss.com/docs/guides/vite) to generate `tailwind.config.js` and `postcss.config.js`.
    Copy the `colors` and `fontFamily` configuration from the `index.html` in this code to your `tailwind.config.js`.

4.  **Copy Files**:
    - Replace the contents of `src/App.tsx` with the `App.tsx` provided here.
    - Copy the `components`, `services`, and `types.ts` files into the `src/` folder.

5.  **Run the App**:
    ```bash
    npm run dev
    ```

---

## 🌐 How to Deploy to GitHub Pages (Free)

You can host this for free on GitHub Pages without buying a domain.

1.  **Create a GitHub Repository**:
    Go to GitHub.com and create a new repository (e.g., `my-website`).

2.  **Configure for Deployment**:
    In your project, open `package.json` and add your homepage URL:
    ```json
    "homepage": "https://<your-github-username>.github.io/<repo-name>",
    ```

3.  **Install Deploy Tool**:
    Run this command:
    ```bash
    npm install gh-pages --save-dev
    ```

4.  **Add Deploy Scripts**:
    In `package.json`, under `"scripts"`, add:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```

5.  **Deploy**:
    Run this command to publish your website:
    ```bash
    npm run deploy
    ```

6.  **Verify**:
    Go to your GitHub Repository > **Settings** > **Pages**. Ensure the source is set to `gh-pages` branch.
    Your website will be live at the URL displayed there!
