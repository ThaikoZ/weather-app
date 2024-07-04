import { useEffect, useState } from "react";
import { axiosInstance, apiKey } from "../services/api-client";

const TestPage = () => {
  const [data, setData] = useState<JSON>();
  useEffect(() => {
    axiosInstance
      .get("Warsaw" + apiKey)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default TestPage;
