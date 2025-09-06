import data from '@/data.json';

type Data = typeof data;
type IExperience = Data[number];

interface ExperienceItemProps {
    data: IExperience,
}

export function Experiences() {
    return (
        <div id="experience" className="mt-10 flex flex-col gap-10">
            {data.map(experience => (
                <ExperienceItem key={experience.duration} data={experience}/>
            ))}
        </div>
    );
}

export function ExperienceItem(props: ExperienceItemProps) {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="space-y-1">
                    <h3 className="font-medium text-xl tracking-tight">{props.data.title}</h3>
                    <h4 className="tracking-tighter">{props.data.company_name}</h4>
                </div>
                <div>{props.data.duration}</div>
            </div>
            <div>
                <ul className="list-disc pl-8 flex flex-col gap-4">
                    {props.data.description.map((value, index) => <li key={index}>{value}</li>)}
                </ul>
            </div>
        </div>
    );
}
