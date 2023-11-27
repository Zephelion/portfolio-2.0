<script>
  import Navigation from "../../components/Navigation.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
  <title>Contact - Russell Numo</title>
</svelte:head>

<Navigation />
<section class="base">
  <h1 class="page-title">Contact me</h1>
  <h2 class="form-title">
    Want to connect? Fill in the form below or just call me.
  </h2>
  <div class="contact-container">
    <form method="POST" action="/contact">
      <div class="form-field">
        <div class="form-heading">
          <label for="name">Name</label>
        </div>
        <input
          class="input"
          type="text"
          id="name"
          placeholder="Type your name"
          required
        />
      </div>
      <hr />
      <div class="form-field">
        <div class="form-heading">
          <label for="email">Email</label>
        </div>
        <input
          class="input"
          type="email"
          id="email"
          placeholder="Type your e-mail"
          required
        />
      </div>
      <hr />

      <div class="form-field">
        <div class="form-heading">
          <label for="message">Message</label>
        </div>
        <textarea
          class="input"
          id="message"
          placeholder="Type your message"
          required
        ></textarea>
      </div>

      <button class="submit" type="submit">Submit</button>
    </form>
    <div class="contact-details">
      <h3 class="contact-heading">Socials</h3>
      <a class="link" href="tel:+31636096943">+31636096943</a>
      <a class="link" href="mailto:russellnumo@outlook.com"
        >russellnumo@outlook.com</a
      >
      <a class="link" target="blank" href="https://wa.me/31636096943"
        >Whatsapp</a
      >
    </div>
  </div>
</section>
<Footer />

<style lang="scss">
  form {
    width: 40%;
  }

  input[type="text"],
  input[type="email"] {
    font-weight: 200;
  }

  textarea {
    font-weight: 200;
    resize: none;
  }
  .page-title {
    margin: 0;
    font-weight: 200;
    font-size: 8vw;
    border-bottom: 0.05rem solid black;
  }
  .base {
    padding: 1rem;
    min-height: 90vh;
  }

  .contact-container {
    display: flex;
    padding: 2rem;
    gap: 24rem;
  }

  .form-title {
    font-weight: 200;
    padding: 2rem;
  }

  .form-heading {
    font-weight: 200;
    font-size: 3rem;
  }

  .form-field {
    padding: 1rem 0;
  }

  .input {
    appearance: none;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    width: 100%;
    padding: 1em 0 2em 0;
    border: 0;
    background: transparent;
    border-radius: 0;
    font-weight: 450;
    font-size: 1em;
    color: var(--color-white);
    display: block;
    margin-top: -0.33em;
    background: transparent !important;
  }

  .submit {
    border: none;
    outline: none;
    background-color: white;
    padding: 1rem;
    border: 0.05rem solid black;
    transition: 0.4s;
    cursor: pointer;
    display: block;
    font-weight: 200;
    text-align: center;

    &:hover {
      transform: scale(1.2);
    }
  }

  .contact-heading {
    font-size: 3rem;
    font-weight: 200;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  ::placeholder {
    font-weight: 200;
  }

  .link {
    color: black;
    font-weight: 200;
    transition: 0.4s;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0.05rem;
      background-color: black;
      transition: width 0.2s;
    }

    &:hover::after {
      width: 100%;
    }
  }
</style>
