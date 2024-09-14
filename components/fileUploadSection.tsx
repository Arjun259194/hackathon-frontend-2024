"use client";

import { useState } from "react";
import { FileUpload } from "./fileUpload";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function FileUploadSection() {
  const [file, setFile] = useState<File[]>([]);
  const [area, setArea] = useState("");

  function analyse() {
    // handle fetching data
  }

  return (
    <section className="flex flex-col space-y-4 items-center">
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
