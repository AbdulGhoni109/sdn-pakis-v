/**
 * SectionHeader — reusable section title + optional subtitle
 * Props: title, subtitle, centered (bool), accent (bool — shows accent underline bar)
 */
export default function SectionHeader({ title, subtitle, centered = false, accent = true }) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {accent && (
        <span className="inline-block w-10 h-1 bg-accent-500 rounded-full mb-3" />
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-primary-700 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
