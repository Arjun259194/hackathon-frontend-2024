"use client";

import { useState } from "react";
import { FileUpload } from "./fileUpload";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { action } from "@/app/analyse/action";

export default function FileUploadSection() {
  const [file, setFile] = useState<File[]>([]);
  const [area, setArea] = useState("");
  const { toast } = useToast();

  async function analyse() {
    try {
      const formdata = new FormData();
      formdata.set("image", file[0]);
      const res = await fetch("http://localhost:8080/model", {
        method: "POST",
        body: formdata,
      });
      if (!res.ok) {
        toast({
          title: "Failed with the server request",
          description: "Something went wrong with the server request",
        });
      }

      const json = await res.json();

      await action(area);
    } catch (err) {
      toast({
        title: "Failed with the server request",
        description: "Something went wrong with the server request",
      });
    }
  }

  return (
    <section className="flex flex-col space-y-8 py-5 items-center">
      <FileUpload
        onChange={(file) => {
          setFile((_) => file);
        }}
      />

      <div className="w-1/3 mx-auto">
        <Label className="text-xl capitalize" htmlFor="area">
          Area
        </Label>
        <Input
          id="area"
          value={area}
          onChange={(e) => setArea((_) => e.target.value)}
        />
      </div>
      <Button onClick={analyse}>Analyse</Button>
    </section>
  );
}
