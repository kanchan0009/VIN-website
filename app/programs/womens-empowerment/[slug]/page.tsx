'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
} from 'lucide-react';

import CTABanner from '../../../components/CTABanner';

const testimonials = [
  {
    name: 'Shanti Tamang',
    signature: 'Shanti Tamang',
    signatureTitle: 'Farmer, Devisthan',
    text: 'Namaste! My name is Shanti Tamang, I am a 34-year-old farmer from Devisthan, Tarkeshwar Municipality. Two years ago, I had the opportunity to participate in an English class offered by Volunteers Initiative Nepal (VIN) at the Women’s Business Center (WBC) in Tinpiple, Tarkeshwar.',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80',
  },
  {
    name: 'Sunita Rai',
    signature: 'Sunita Rai',
    signatureTitle: 'Micro-entrepreneur',
    text: 'Joining the VIN program was a turning point for me. The training in business management and the micro-loan I received helped me start my own small grocery shop.',
    image:
      'https://images.unsplash.com/photo-1590233465423-40844bb147d3?w=800&q=80',
  },
];

const projects = [
  {
    id: 1,
    title: 'Women’s Development in Nepal: The Myth of Empowerment',
    slug: 'myth-of-empowerment',
    image:
      'https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=800&q=80',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    title: 'Income Generation through Micro-credit',
    slug: 'micro-credit-income',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    title: 'Education & Life Skills for Rural Women',
    slug: 'education-life-skills',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const googleReviews = [
  {
    name: 'John Smith',
    title: 'Volunteer',
    initial: 'J',
    date: 'March 1, 2024',
    text: 'Exceptional experience! The team exceeded our expectations.',
  },
  {
    name: 'Sarah Johnson',
    title: 'Intern',
    initial: 'S',
    date: 'February 15, 2024',
    text: 'Working with VIN was a game-changer.',
  },
  {
    name: 'Michael Brown',
    title: 'Supporter',
    initial: 'M',
    date: 'January 10, 2024',
    text: 'A fantastic experience from start to finish.',
  },
  {
    name: 'Emily Davis',
    title: 'Volunteer',
    initial: 'E',
    date: 'December 20, 2023',
    text: 'Great local support and seamless service.',
  },
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function WomensEmpowermentDetailPage({
  params,
}: PageProps) {
  const router = useRouter();

  const { slug } = params;

  const title = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const [activeIndex, setActiveIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  const [visibleProjectCount, setVisibleProjectCount] = useState(1);
  const [visibleReviewCount, setVisibleReviewCount] = useState(1);

  const current = testimonials[activeIndex];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleProjectCount(3);
        setVisibleReviewCount(4);
      } else if (window.innerWidth >= 640) {
        setVisibleProjectCount(2);
        setVisibleReviewCount(2);
      } else {
        setVisibleProjectCount(1);
        setVisibleReviewCount(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const nextReview = () => {
    if (googleReviews.length <= visibleReviewCount) return;

    setReviewIndex(
      (prev) =>
        (prev + 1) %
        (googleReviews.length - visibleReviewCount + 1)
    );
  };

  const prevReview = () => {
    if (googleReviews.length <= visibleReviewCount) return;

    setReviewIndex(
      (prev) =>
        (prev -
          1 +
          (googleReviews.length - visibleReviewCount + 1)) %
        (googleReviews.length - visibleReviewCount + 1)
    );
  };

  const nextTestimonial = () => {
    setActiveIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const handleDonateClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const widget = document.getElementById(
      'donation-widget'
    );

    if (widget) {
      widget.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      router.push('/#donation-widget');
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="w-full h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80"
          alt={title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Intro */}
      <section className="py-10 bg-white">
        <div className="px-6">
          <div className="bg-[#DFF0FF] rounded-[20px] p-8 text-center">
            <h1 className="text-4xl font-semibold mb-4">
              {title}
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Empowering women in rural and marginalized
              communities of Nepal through inclusive
              education, rights awareness, and practical
              life skills.
            </p>

            <button
              onClick={handleDonateClick}
              className="bg-[#1e238f] text-white px-8 py-3 rounded-md"
            >
              Support This Project
            </button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 bg-white">
        <div className="px-6 relative">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-semibold">
              Women&apos;s Empowerment Projects
            </h2>

            <div className="flex gap-3">
              <button
                onClick={prevProject}
                className="w-10 h-10 rounded-full border flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextProject}
                className="w-10 h-10 rounded-full border flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  projectIndex *
                  (100 / visibleProjectCount)
                }%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-[#1e238f] rounded-xl overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[240px] object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-white/80 text-sm mb-5">
                      {project.desc}
                    </p>

                    <Link
                      href={`/programs/womens-empowerment/${project.slug}`}
                      className="flex items-center gap-2 text-white font-semibold"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="px-6">
          <h2 className="text-5xl font-semibold text-center mb-12">
            Testimonials
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-[#1e238f] text-white flex items-center justify-center"
            >
              <ChevronLeft />
            </button>

            <div className="flex-1 flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {current.text}
                </p>

                <h4 className="font-bold">
                  {current.signature}
                </h4>

                <p className="text-gray-500 text-sm">
                  {current.signatureTitle}
                </p>
              </div>

              <div className="w-full lg:w-[400px]">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#1e238f] text-white flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-semibold">
              Google Review Wall
            </h2>

            <div className="flex gap-3">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full border bg-white flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full border bg-white flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  reviewIndex *
                  (100 / visibleReviewCount)
                }%)`,
              }}
            >
              {googleReviews.map((review, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/2 lg:w-1/4 px-3 shrink-0"
                >
                  <div className="bg-white rounded-2xl p-6 h-full shadow-sm">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill="#FFC107"
                          className="text-[#FFC107]"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 text-sm mb-6">
                      {review.text}
                    </p>

                    <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mb-4">
                      {review.initial}
                    </div>

                    <h4 className="font-bold">
                      {review.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {review.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}