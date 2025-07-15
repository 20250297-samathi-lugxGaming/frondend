// // === Simple Analytics Tracker ===
// // Generates a random session ID per page load
// const sessionId = 'sess-' + Math.random().toString(36).substring(2, 12);

// // Function to send events safely
// function sendAnalyticsEvent(type) {
//   fetch('/api/analytics', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       event_type: type,
//       page: window.location.pathname,
//       session_id: sessionId,
//       timestamp: new Date().toISOString()
//     })
//   });
// }

// // Wait for DOM to be ready before firing page view
// document.addEventListener('DOMContentLoaded', () => {
//   sendAnalyticsEvent('page_view');
// });

// // Click event
// document.addEventListener('click', () => {
//   sendAnalyticsEvent('click');
// });

// // Scroll event
// document.addEventListener('scroll', () => {
//   sendAnalyticsEvent('scroll');
// });
