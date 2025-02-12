/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  overflow: hidden;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Logo */
.logo img {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

/* Header */
header h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

header h1 span {
  color: #ff6f61;
}

header p {
  font-size: 1.2rem;
  margin-bottom: 40px;
}

/* Countdown Timer */
.countdown {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
}

.timer {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 100px;
  text-align: center;
}

.timer span {
  display: block;
  font-size: 2rem;
  font-weight: bold;
}

.timer .label {
  font-size: 1rem;
  color: #ccc;
}

/* Contact Us Section */
.contact-us {
  margin-top: 50px;
}

.contact-us h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.email-link {
  color: #ff6f61;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.email-link:hover {
  color: #ff3b2f;
}

/* Social Media Links */
.social-links {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icon {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #ff6f61;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 2s ease-in-out;
}

.scroll-animation {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.scroll-animation.visible {
  opacity: 1;
  transform: translateY(0);
}
