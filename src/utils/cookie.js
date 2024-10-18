export const setCookie = (tokens) => {
  document.cookie = `token=${tokens}; max-age=${60 * 60}`;
};

export const getCookie = () => {
  if (!document.cookie) return;

  return document.cookie.split("=")[1];
};
