import {getAllCompanions} from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

const CompanionsLibrary = async ({searchParams}: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({subject, topic});

  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companion Library</h1>
        <div className='flex gap-4'>
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className='companions-grid'>
        {companions.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-12 text-center'>
            <p className='text-lg text-gray-600 mb-4'>No companions found</p>
            <p className='text-sm text-gray-500'>
              Create your first companion to get started!
            </p>
          </div>
        ) : (
          companions.map(companion => (
            <CompanionCard
              key={companion.id}
              {...companion}
              duration={companion.duration || 15}
              color={getSubjectColor(companion.subject)}
              bookmarked={false}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
