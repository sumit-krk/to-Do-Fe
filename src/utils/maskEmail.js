export const maskEmail = (email) => {
  if (!email) return "";

  const [username, domain] = email.split("@");
  const visible = 2;

  return (
    username.slice(0, visible) +
    "*".repeat(Math.max(username.length - visible, 0)) +
    "@" +
    domain
  );
};
