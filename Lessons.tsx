import React from 'react';
import LessonCard from '../components/LessonCard';

const lessons = [
    { title: 'Introduction to Algebra', description: 'Learn the basics of algebra, including variables and equations.' },
    { title: 'Geometry Fundamentals', description: 'Explore the principles of geometry, including shapes and angles.' },
    { title: 'Calculus 101', description: 'An introduction to the concepts of limits, derivatives, and integrals.' },
    // Add more lessons as needed
];

const Lessons: React.FC = () => {
    return (
        <div>
            <h1>Available Lessons</h1>
            <div className="lesson-list">
                {lessons.map((lesson, index) => (
                    <LessonCard key={index} title={lesson.title} description={lesson.description} />
                ))}
            </div>
        </div>
    );
};

export default Lessons;