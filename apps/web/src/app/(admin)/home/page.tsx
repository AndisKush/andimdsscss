"use client";
import { Button } from "@andisds/ui";

export default function Page() {

  return (
    <div>
      <div
        style={{ padding: "20px", background: "white", borderRadius: "8px" }}
      >
        <h1>Dashboard Principal</h1>
        <p>Aqui renderiza o children do Next.js (page content).</p>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="primary" onClick={() => alert("Primary Clicked!")}>
          Botão Primário
        </Button>

        <Button variant="secondary">Botão Secundário</Button>

        <Button variant="outline">Botão Outline</Button>
      </div>
    </div>
  );
}
