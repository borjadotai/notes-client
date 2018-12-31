const dev = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-api-dev-attachmentsbucket-1186fra5snbre"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://jn29pkvhsj.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ozkRJWODZ",
    APP_CLIENT_ID: "6i3utk6uqbapgsd99ls394pu2g",
    IDENTITY_POOL_ID: "us-east-2:9a2f7a4d-e6ac-48c3-bd49-2ebb37b6250a"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-api-prod-attachmentsbucket-1v94uylvwdkju"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://58rsqi3owk.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_A0u3ERR7L",
    APP_CLIENT_ID: "275nrjirbcj9ud9deo3638vp0u",
    IDENTITY_POOL_ID: "us-east-2:e1887b75-92ed-4cd2-9c5d-747a46e9017d"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
