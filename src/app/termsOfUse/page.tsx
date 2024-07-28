import { Link, Typography } from '~/components'

const Page = () => {
  return (
    <div>
      <Typography adorn gutterBottom variant='h1'>
        Terms of use
      </Typography>
      <Typography gutterBottom>Version 1.0</Typography>
      <Typography gutterBottom>
        The Tunilit website located at <Link href='/'>tunilit.vercel.app</Link> 
        is a copyrighted work belonging to Tunilit. 
        Certain features of the Site may be subject to additional guidelines, 
        terms, or rules, which will be posted on the Site in connection with 
        such features.
      </Typography>
      <Typography gutterBottom>
        All such additional terms, guidelines, and rules are incorporated by 
        reference into these Terms.
      </Typography>
      <Typography gutterBottom>
        These Terms of Use described the legally binding terms and conditions that oversee 
        your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE 
        TERMS and you represent that you have the authority and capacity to enter into these Terms. 
        YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF 
        THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.
      </Typography>
      <Typography gutterBottom variant='h2'>User Content</Typography>
      <Typography gutterBottom>
        “User Content” means any and all information and content that a user submits to the Site. 
        You are exclusively responsible for your User Content. You bear all risks associated with 
        use of your User Content.  
        You hereby certify that your User Content does not violate our Acceptable Use Policy.  
        You may not represent or imply to others that your User Content is in any way provided, 
        sponsored or endorsed by Company. Because you alone are responsible for your User Content, 
        you may expose yourself to liability. Company is not obliged to backup any User Content that 
        you post; also, your User Content may be deleted at any time without prior notice to you. 
        You are solely responsible for making your own backup copies of your User Content if you desire.
      </Typography>
      <Typography gutterBottom variant='h3'>Acceptable Use Policy</Typography>
      <Typography gutterBottom>
        The following terms constitute our “Acceptable Use Policy”: You agree not to use the Site to collect, 
        upload, transmit, display, or distribute any User Content (i) that violates any third-party right or 
        any intellectual property or proprietary right; (ii) that is unlawful, harassing, abusive, tortious, 
        threatening, harmful, invasive of another's privacy, vulgar, defamatory, false, intentionally misleading, 
        trade libelous, pornographic, obscene, patently offensive, promotes racism, bigotry, hatred, or physical 
        harm of any kind against any group or individual; (iii) that is harmful to minors in any way; or (iv) 
        that is in violation of any law, regulation, or obligations or restrictions imposed by any third party.
      </Typography>
    </div>
  )
}

export default Page
