import { BASE_URL, PUBLIC_KEY } from "@env";

const getListofArticles = async (errorResp: Function, success: Function) => {
  fetch(
    BASE_URL +
      "/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=" +
      PUBLIC_KEY
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((result) => {
      success(result);
    })
    .catch((error: Error) => {
      errorResp(error);
    });
};

export { getListofArticles };
