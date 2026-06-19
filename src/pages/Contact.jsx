function Contact() {
  return (
    <>
      <div>Contact</div>
      <ul>
        <li>
          <a href="https://github.com/vitejs/vite" target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#github-icon"></use>
            </svg>
            GitHub
          </a>
        </li>
        <li>
          <a href="https://chat.vite.dev/" target="_blank">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#discord-icon"></use>
            </svg>
            Discord
          </a>
        </li>
      </ul>
    </>
  );
}

export default Contact;
