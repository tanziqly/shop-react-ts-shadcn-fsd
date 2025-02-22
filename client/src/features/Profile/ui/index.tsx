import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar";
import { Button } from "@shared/ui/button";
import { Label } from "@shared/ui/label";
import { Input } from "@shared/ui/input";

import { FC } from "react";
import { useProfile } from "../lib/useProfile";

export const Profile: FC = () => {
  const {
    name,
    setName,
    lastname,
    setLastname,
    email,
    setEmail,
    password,
    setPassword,
    handleSave,
  } = useProfile();

  return (
    <section className="flex-center px-5 h-screen">
      <div className="width items-center h-full flex flex-col mt-16">
        <article className="relative bg-neutral-200 dark:bg-neutral-700 w-full h-28 rounded-lg">
          <div className="absolute -bottom-8 left-4 sm:left-16 flex gap-4 items-center">
            <Avatar className="h-28 w-28">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-white">
              Tommy McLoving
            </span>
          </div>
        </article>
        <div className="flex flex-col max-w-[400px] w-full mt-12">
          <h3 className="text-xl">Profile</h3>
          <span className="text-neutral-500">
            This is how others will see you on the site
          </span>
          <hr className="my-8" />
          <div className="flex flex-col gap-6">
            <Button variant="outline">Change avatar</Button>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                className="text-sm"
                placeholder="Type your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="lastname">Lastname</Label>
              <Input
                id="lastname"
                className="text-sm"
                placeholder="Type your lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                className="text-sm placeholder:text-sm"
                placeholder="Type your email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                className="text-sm"
                placeholder="Type your password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button onClick={handleSave}>Save changes</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
