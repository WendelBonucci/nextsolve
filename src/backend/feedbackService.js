import { db } from "./firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function enviarFeedback(nome, mensagem) {
  if (!mensagem.trim()) {
    throw new Error("Mensagem não pode ser vazia.");
  }
console.log("Enviando feedback:", nome, mensagem);
  await addDoc(collection(db, "comentarios"), {
    nome: nome.trim() || "Anônimo",
    mensagem: mensagem.trim(),
    createdAt: new Date() // timestamp do servidor
  });
}
