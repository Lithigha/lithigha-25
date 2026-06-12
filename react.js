import React from 'react';
import './FieryProfile.css'; // This resolves the dependency error
 
const FieryProfileCard = () => {
    return (
        <div>
            <ul>
                {/* Contact info also uses fire-based class names */}
                <li><span className="fire-icon">🔥</span> mohamed@example.com</li>
                <li><span className="fire-icon">🔥</span> +91 98765 43210</li>
                <li><span className="fire-icon">🔥</span> Chennai, Tamil Nadu</li>
                <li><span className="fire-icon">🔥</span> ://github.com</li>
            </ul>
        </div>
    );
};
 
export default FieryProfileCard
