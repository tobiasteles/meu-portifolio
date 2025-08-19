// @deno-types="npm:@types/resend"
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { Resend } from "resend";

serve(async (req) => {
  // Configuração CORS
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, whatsapp, subject, message } = body;

    // Verificar se todos os campos obrigatórios existem
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios faltando" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // @ts-ignore: 'Deno' is available in the Deno runtime
    const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

    const { error } = await resend.emails.send({
      from: "contato@tobiasteles.dev",
      to: "tobias.teles@gmail.com",
      subject: `Novo contato: ${subject}`,
      html: `
        <h2>Nova mensagem recebida</h2>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>WhatsApp:</b> ${whatsapp || "não informado"}</p>
        <p><b>Mensagem:</b> ${message}</p>
      `,
    });

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Erro na função:", err);
    return new Response(
      JSON.stringify({ error: "Falha ao enviar e-mail" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});