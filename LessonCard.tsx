import React from 'react';

interface LessonCardProps {
    title: string;
    description: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, description }) => {
    return (
        <div className="lesson-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default LessonCard;