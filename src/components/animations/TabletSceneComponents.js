import React from 'react';

// Constants
export const COLORS = {
  vayyarBlue: 'rgba(5, 170, 233, 1)',
  primary: '#2D7DD2',
  secondary: '#6C757D',
  success: '#3EBD93',
  warning: '#F39C12',
  danger: '#E63946',
  light: '#F8F9FA',
  dark: '#343A40',
  white: '#FFFFFF',
  border: '#E0E0E0'
};

/**
 * Section component with title and content
 */
export const Section = ({ title, icon, children, className = '' }) => (
  <div className={`tablet-scene-section ${className}`}>
    {title && (
      <h3 className="tablet-scene-section-title">
        {icon && <span className="tablet-scene-section-icon">{icon}</span>}
        {title}
      </h3>
    )}
    <div className="tablet-scene-section-content">
      {children}
    </div>
  </div>
);

/**
 * Card component for content blocks
 */
export const Card = ({ 
  title, 
  subtitle, 
  children, 
  footer,
  accentColor,
  className = ''
}) => (
  <div 
    className={`tablet-scene-card ${className}`}
    style={accentColor ? { borderLeft: `4px solid ${accentColor}` } : {}}
  >
    {title && (
      <div className="tablet-scene-card-header">
        <div className="tablet-scene-card-header-title">{title}</div>
        {subtitle && <div className="tablet-scene-card-header-subtitle">{subtitle}</div>}
      </div>
    )}
    <div className="tablet-scene-card-content">
      {children}
    </div>
    {footer && (
      <div className="tablet-scene-card-footer">
        {footer}
      </div>
    )}
  </div>
);

/**
 * Badge/Label component
 */
export const Badge = ({ text, color, className = '' }) => (
  <div 
    className={`tablet-scene-badge ${className}`}
    style={{ 
      backgroundColor: color,
      color: color ? isLightColor(color) ? '#343A40' : '#FFFFFF' : undefined
    }}
  >
    {text}
  </div>
);

/**
 * Alert/Banner component
 */
export const Alert = ({ 
  title, 
  content, 
  type = 'info', 
  icon,
  action,
  className = ''
}) => {
  // Determine colors based on type
  const typeClasses = {
    critical: 'tablet-scene-alert-critical',
    warning: 'tablet-scene-alert-warning',
    info: 'tablet-scene-alert-info'
  };
  
  return (
    <div className={`tablet-scene-alert ${typeClasses[type] || ''} ${className}`}>
      {icon && <div className="tablet-scene-alert-icon">{icon}</div>}
      <div className="tablet-scene-alert-content">
        {title && <div className="tablet-scene-alert-title">{title}</div>}
        {content}
      </div>
      {action && <div className="tablet-scene-alert-action">{action}</div>}
    </div>
  );
};

/**
 * Button component
 */
export const Button = ({ 
  text, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  const variantClass = `tablet-scene-button-${variant}`;
  
  return (
    <button
      className={`tablet-scene-button ${variantClass} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

/**
 * List Item component
 */
export const ListItem = ({
  title,
  body,
  icon,
  rightContent,
  className = ''
}) => (
  <div className={`tablet-scene-list-item ${className}`}>
    {icon && <div className="tablet-scene-list-item-icon">{icon}</div>}
    <div className="tablet-scene-list-item-content">
      {title && <div className="tablet-scene-list-item-title">{title}</div>}
      {body && <div className="tablet-scene-list-item-body">{body}</div>}
    </div>
    {rightContent && (
      <div className="tablet-scene-list-item-right">
        {rightContent}
      </div>
    )}
  </div>
);

/**
 * Chat Message Bubble component
 */
export const ChatBubble = ({
  content,
  timestamp,
  isUser = false,
  className = ''
}) => {
  const bubbleClass = isUser 
    ? 'tablet-scene-chat-bubble-user' 
    : 'tablet-scene-chat-bubble-bot';
    
  return (
    <div className={`tablet-scene-chat-bubble ${bubbleClass} ${className}`}>
      <div className="tablet-scene-chat-bubble-content">{content}</div>
      {timestamp && (
        <div className="tablet-scene-chat-bubble-timestamp">{timestamp}</div>
      )}
    </div>
  );
};

// Helper function to determine if a color is light or dark
const isLightColor = (color) => {
  // Simple implementation - can be improved for better contrast detection
  if (!color.startsWith('#')) return false;
  
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate brightness using human perception of colors
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
}; 