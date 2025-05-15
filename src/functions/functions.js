import React from 'react';

export default function renderText(content) {
  const paragraphs = content.split(/\n\s*\n/);

  return paragraphs.map((para, idx) =>
    React.createElement('p', { key: idx }, para.trim())
  );
}
  