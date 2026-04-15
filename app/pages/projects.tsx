import PageBlock from "~/components/pageBlock";
import { almenrGreen, almenrOffGreen, almenrOffOrange, almenrOffWhite, almenrOrange, type ColorPack } from "~/utility/colorUtils";
import almenr from '~/resources/almenr.mp4'
import gammalstorp from '~/resources/gammalstorp.mp4'
import type { JSX } from "react";
import { Link } from "react-router";

type Project = {
    colors: ColorPack;
    media: string; 
    mediaIsVideo?: boolean;
    title: string;
    description: JSX.Element;
    link: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            colors: {
                foreground: 'white',
                middleground: almenrOrange,
                background: almenrOffOrange,
            },
            description: (
                <>
                    <h3>What is Almenr?</h3>
                    <p className="italic">Almenr facilitates, builds, and maintains co-living communites all over Denmark</p>
                    <p>To ease the experience of these three processes, Almenr, and their customers, use an online platform to facilitate communication, events, registrations, and much more!</p>
                    <div className="flex justify-center py-2">
                        <Link 
                            to='https://almenr.dk/u' 
                            className="underline hover:no-underline italic"
                            target="_blank" rel="noopener noreferrer"
                        >
                                <h4>Check it out!</h4>
                        </Link>
                    </div>
                    <br/>
                    <h3>My contribution!</h3>
                </>
            ),
            title: 'Almenr online platform',
            media: almenr,
            mediaIsVideo: true,
            link: 'https://almenr.dk/u'
        },
        {
            colors: {
                foreground: 'white',
                middleground: almenrGreen,
                background: almenrOffGreen,
            },
            description: (
                <>
                    <h3>What is Gammalstorp?</h3>
                    <p>Gammalstorp is a cool fritidslandsby</p>
                </>
            ),
            title: 'Gammalstorp booking',
            media: gammalstorp,
            mediaIsVideo: true,
            link: 'https://almenr.dk/gammalstorp'
        }
    ]

    //Switch sides based on index
    return projects.map((p, i) => {
        const textLeft = i % 2 === 0;

        const mediaElement = (
            <div className="overflow-hidden flex justify-center">
                {p.mediaIsVideo
                    ? ( 
                        <video
                            key={i} src={p.media} autoPlay loop muted
                            className={`object-cover
                                ${textLeft ? 'rounded-r-4xl' : 'rounded-l-4xl'}    
                            `}
                        />
                    ) : (
                        <img 
                            key={i} src={p.media} alt="loading..." 
                            className={`object-cover
                                ${textLeft ? 'rounded-r-4xl' : 'rounded-l-4xl'}    
                            `} 
                        />
                    )
                }
            </div>
            
        )
        const textElement = (
            <div className="p-5">
                <h1 className="pt-2">{p.title}</h1>
                <p className="px-5 py-4">{p.description}</p>
            </div>
        )

        return <PageBlock
            colors={{ background: p.colors.background }}
            key={p.title}
        >
            <div
                className="w-full min-h-full rounded-4xl grid grid-cols-2 text-center"
                style={{ backgroundColor: p.colors.middleground, color: p.colors.foreground }}
            >
                {textLeft ? (
                    <>
                        {textElement}
                        {mediaElement}
                    </>
                ) : (
                    <>
                        {mediaElement}
                        {textElement}
                    </>
                )}
            </div>
        </PageBlock>
    })
}