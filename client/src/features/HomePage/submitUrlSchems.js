import * as Yup from "yup";

const UrlSchema = Yup.object().shape({
    url: Yup.string().url().required("Url is required")
  });

  export default UrlSchema;