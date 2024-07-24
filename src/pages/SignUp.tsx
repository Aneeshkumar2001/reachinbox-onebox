import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import google from "@/assets/icons/google.svg";

import { Link } from "react-router-dom";

export default function SignUp() {
  const redirectToGoogleLogin = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-onebox-j8xot0s3p-aneeshkumar-ms-projects.vercel.app";
  };

  return (
    <Card className="mx-auto my-44 max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">Create a new account</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={redirectToGoogleLogin}
          >
            <img src={google} alt="google" className="w-4 mr-3"></img>
            Sign up with Google
          </Button>
          <Button type="submit" className="w-full bg-blue-700 text-white">
            Create an account
          </Button>
        </div>
        <div className="flex justify-center gap-1 mt-4 text-center text-sm">
          <CardDescription>Already have an account? </CardDescription>
          <Link to={""}>Sign in</Link>
        </div>
      </CardContent>
    </Card>
  );
}
