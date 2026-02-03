"use client";
import styles from "./Reviews.module.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useAOS from "@/utils/useAOS";
import ReviewForm from "./ReviewForm/ReviewForm";
import { SlUserFollowing } from "react-icons/sl";

// Firestore
import { db } from "@/backend/firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
     const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useAOS()

  // Busca comentários do Firebase em tempo real
  useEffect(() => {
    const q = query(
      collection(db, "comentarios"),
      orderBy("createdAt", "desc") // mais recentes primeiro
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(fetchedReviews);
    });

    return () => unsubscribe();
  }, []);

  // Se não houver reviews, cria um card “vazio”
  const slides = reviews.length > 0
    ? reviews
    : [{ id: "empty", nome: "Nenhum comentário ainda", mensagem: "Clique no botão abaixo para enviar um feedback!" }];

  return (
    <section
      className={styles.ReviewsComponent}
      data-aos="fade-up"
      data-aos-delay="0"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={!isMobile}
        loop={reviews.length > 0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        
        style={{
          "--swiper-navigation-color": "#64C9FF6C",
          "--swiper-pagination-color": "#64C9FF6C",
        }}
        className={styles.swiper}
      >
        {slides.map((r) => (
          <SwiperSlide key={r.id} className={styles.slide}>
            <div className={styles.card}>
              <span className={styles.quote}><SlUserFollowing /></span>
              <p className={styles.text}>{r.mensagem}</p>
              <div>
                <p className={styles.name}>{r.nome}</p>
                <p className={styles.role}>{reviews.length > 0 ? "Cliente" : ""}</p>
              </div>
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className={styles.btnReview}
              >
                Deixe sua avaliação
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showForm && <ReviewForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
