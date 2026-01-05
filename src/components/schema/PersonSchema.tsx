import { TeamMember } from '@/lib/team';

interface PersonSchemaProps {
  member: TeamMember;
}

export default function PersonSchema({ member }: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    image: `https://bitcoininstitute.ch${member.photo}`,
    email: member.email,
    sameAs: [
      ...(member.linkedin ? [member.linkedin] : []),
      ...(member.twitter ? [member.twitter] : []),
    ].length > 0 ? [
      ...(member.linkedin ? [member.linkedin] : []),
      ...(member.twitter ? [member.twitter] : []),
    ] : undefined,
    affiliation: {
      '@type': 'Organization',
      name: 'Swiss Bitcoin Institute',
      url: 'https://bitcoininstitute.ch',
    },
    alumniOf: member.name.includes('Dr.') ? {
      '@type': 'EducationalOrganization',
      name: 'University',
    } : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

