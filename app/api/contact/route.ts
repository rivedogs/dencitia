import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { nombre, clinica, tipo, telefono, volumen, mensaje } = body;

    if (!nombre || !clinica || !tipo || !telefono || !volumen) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now(),
      fecha: new Date().toISOString(),
      nombre,
      clinica,
      tipo,
      telefono,
      volumen,
      mensaje: mensaje || "",
    };

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "leads.json");

    let leads: unknown[] = [];
    try {
      await fs.mkdir(dataDir, { recursive: true });
      const content = await fs.readFile(filePath, "utf-8");
      leads = JSON.parse(content);
    } catch {
      leads = [];
    }

    leads.push(lead);
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2), "utf-8");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
