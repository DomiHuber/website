import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { serviceType, ...formData } = body;
    
    // Calculate lead score for internal prioritization
    const score = calculateLeadScore(formData, serviceType);
    
    // Log the inquiry for tracking
    console.log('New Inquiry:', {
      serviceType,
      score,
      name: formData.name,
      email: formData.email,
      organization: formData.organization,
      timestamp: new Date().toISOString(),
    });
    
    // TODO: Integrate with your preferred system:
    // - Send email notification to SBI team
    // - Store in database
    // - Send to CRM (HubSpot, Pipedrive, etc.)
    // - Trigger automated email sequence
    
    // Send auto-response email to the lead
    // await sendAutoResponse(formData.email, serviceType);
    
    return NextResponse.json({ 
      success: true, 
      score,
      message: 'Request received successfully' 
    });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

function calculateLeadScore(formData: any, serviceType: string): number {
  let score = 0;
  
  // Base points by service type
  if (serviceType === 'courses') score += 20;
  else if (serviceType === 'research') score += 15;
  else if (serviceType === 'speaking') score += 10;
  
  // Seniority scoring (high value decision-makers)
  if (formData.seniorityLevel === 'c-suite') score += 25;
  else if (formData.seniorityLevel === 'director') score += 15;
  else if (formData.seniorityLevel === 'manager') score += 10;
  
  // Organization type scoring (target segments)
  if (formData.organizationType === 'family-office') score += 20;
  else if (formData.organizationType === 'bank') score += 20;
  else if (formData.organizationType === 'financial-advisory') score += 15;
  else if (formData.organizationType === 'corporation') score += 10;
  
  // Timeline urgency (ready to buy signals)
  if (formData.timeline === 'asap' || formData.timeline === 'urgent') score += 25;
  else if (formData.timeline === '1-2months' || formData.timeline === '1-2weeks') score += 15;
  else if (formData.timeline === '3-6months') score += 5;
  
  // Team size (group bookings more valuable)
  if (formData.teamSize === '10+') score += 20;
  else if (formData.teamSize === '4-10') score += 15;
  else if (formData.teamSize === '2-3') score += 10;
  
  // Work experience (senior professionals)
  if (formData.workExperience === '15+') score += 10;
  else if (formData.workExperience === '5-15') score += 5;
  
  // Multiple courses selected (higher intent)
  if (formData.selectedCourses && formData.selectedCourses.length > 1) {
    score += 15;
  }
  
  // Custom program interest (high-value opportunity)
  if (formData.selectedCourses && formData.selectedCourses.includes('custom')) {
    score += 10;
  }
  
  return Math.min(score, 100); // Cap at 100
}

// Helper function for sending auto-response emails
// Implement with your preferred email service (SendGrid, Resend, etc.)
async function sendAutoResponse(email: string, serviceType: string) {
  const subject = getEmailSubject(serviceType);
  const body = getEmailBody(serviceType);
  
  // TODO: Integrate with email service
  console.log(`Would send email to ${email}:`, { subject, body });
  
  /*
  Example integration with Resend:
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  await resend.emails.send({
    from: 'Swiss Bitcoin Institute <hello@bitcoininstitute.ch>',
    to: email,
    subject: subject,
    html: body,
  });
  */
}

function getEmailSubject(serviceType: string): string {
  switch (serviceType) {
    case 'research':
      return 'Your SBI Discovery Call - Next Steps';
    case 'speaking':
      return 'Your Speaking Request Received - SBI';
    case 'courses':
      return 'Your Course Inquiry - Swiss Bitcoin Institute';
    default:
      return 'Your Inquiry - Swiss Bitcoin Institute';
  }
}

function getEmailBody(serviceType: string): string {
  // Return HTML email template based on service type
  // TODO: Create professional email templates
  return `
    <h2>Thank you for your interest in the Swiss Bitcoin Institute</h2>
    <p>We've received your ${serviceType} inquiry and will respond within 24 hours.</p>
    <p>Best regards,<br>The SBI Team</p>
  `;
}
