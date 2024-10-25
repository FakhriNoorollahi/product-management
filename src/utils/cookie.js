export const setCookie = (tokens) => {
  document.cookie = `token=${tokens}; path=/; max-age=${60 * 60};`;
};

export const getCookie = () => {
  if (!document.cookie) return;

  return document.cookie.split("=")[1];
};

export const removeCooki = () => {
  document.cookie = "token=; max-age=0; path=/";
};
