const SkillsCard = ({elem, elemIdx}) => {
    return (
        <div className='card-skills' key={elemIdx}>
            <div className='card-skills__header'>
                <h6>{elem.title}</h6>
            </div>
            <div className='card-skills__body'>
                <p>{elem.content}</p>
            </div>
        </div>
    )
}

export default SkillsCard;