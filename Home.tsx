import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LessonCard from '../components/LessonCard';

const Home: React.FC = () => {
    const featuredLessons = [
        { title: 'Introduction to Algebra', description: 'Learn the basics of algebra, including variables and equations.' },
        { title: 'Geometry Fundamentals', description: 'Explore the properties of shapes and theorems of geometry.' },
        { title: 'Calculus 101', description: 'An introduction to the concepts of limits, derivatives, and integrals.' },
    ];

    return (
        <div>
            <Header />
            <h1>Welcome to the Math Learning Platform</h1>
            <h2>Featured Lessons</h2>
            <div className="lesson-cards">
                {featuredLessons.map((lesson, index) => (
                    <LessonCard key={index} title={lesson.title} description={lesson.description} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;