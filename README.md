# 24 Years of You - Final Gift Project

A beautiful, romantic, mobile-focused gift website celebrating 24 years through interactive games and heartfelt messages.

## Features

- **24 Unique Gifts** - One for each year of life
- **5 Life Eras** - Journey through different life stages
- **Progressive Scratch Cards** - Era cards with increasing difficulty (20% to 100%)
- **24 Interactive Games** - Easy-to-complete games for gift unwrapping
- **Mobile Optimized** - Touch gestures, swipe navigation, responsive design
- **Progress Tracking** - LocalStorage saves your journey
- **Background Music** - Romantic soundtrack throughout
- **Elegant Design** - Simple, clean, and romantic aesthetic

## Project Structure

```
final/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Core app logic and gift system
├── games.js            # 24 game implementations
├── 01.mp3              # Background music
└── README.md           # This file
```

## How to Use

### Quick Start

1. Open `index.html` in any modern web browser
2. Click "Begin the Journey"
3. Play games to unlock gifts
4. Swipe left/right to navigate between gifts
5. Tap the grid icon to view all gifts

### Controls

- **Swipe Left/Right** - Navigate between gifts (mobile)
- **Arrow Keys** - Navigate between gifts (desktop)
- **Game Button** - Start mini-game to unlock current gift
- **Grid View** - See all 24 gifts at once
- **Music Button** - Toggle background music

## Era System

The 24 gifts are organized into 5 life eras:

1. **Little Princess** (Ages 1-6) - 20% scratch to unlock
2. **School Days** (Ages 7-13) - 40% scratch to unlock
3. **Becoming Her Best Self** (Ages 14-17) - 60% scratch to unlock
4. **Queen Era** (Ages 18-23) - 80% scratch to unlock
5. **Forever With Me** (Age 24) - 100% scratch to unlock

## The 24 Games

1. **Color the Heart** - Tap to fill with color
2. **Memory Match** - Match emoji pairs
3. **Mona Lisa Puzzle** - 3x3 sliding tile puzzle
4. **Snake Game** - Collect 3 hearts
5. **Space Shooter** - Shoot 5 targets
6. **Catch the Hearts** - Catch 5 falling hearts
7. **Word Scramble** - Unscramble love words
8. **Pattern Match** - Replicate color patterns
9. **Flappy Bird** - Pass through 3 gaps
10. **Connect the Dots** - Draw in sequence
11. **Simon Says** - Memory sequence (3 levels)
12. **Number Puzzle** - Arrange 1-7 in order
13. **Color Mixer** - Match the target color
14. **Balloon Pop** - Pop 5 balloons
15. **Rhythm Tap** - Tap on beat (3 times)
16. **Maze Runner** - Navigate to exit
17. **Tic Tac Toe** - Get 3 in a row
18. **Bubble Pop** - Pop all bubbles
19. **Card Flip** - Flip all cards
20. **Jigsaw Puzzle** - Complete the picture
21. **Whack-a-Mole** - Catch the hearts
22. **Letter Trace** - Spell L-O-V-E
23. **Quiz Game** - Answer romantic questions
24. **Heart Unlock** - Final code entry (2024)

## Design Philosophy

- **Simple & Elegant** - Clean interface, romantic color palette
- **Mobile First** - Optimized for phones and tablets
- **Easy to Complete** - Games designed for gift unwrapping, not challenge
- **Smooth Animations** - Delightful transitions and feedback
- **No Emojis** - Uses Font Awesome icons for consistency

## Color Palette

- **Primary Pink**: #ff9ec7
- **Secondary Pink**: #ffc4dd
- **Light Pink**: #ffe5f1
- **Purple**: #c597d8
- **Light Purple**: #e5d4f0
- **White**: #ffffff

## Typography

- **Headings**: Playfair Display (elegant serif)
- **Body**: Poppins (clean sans-serif)

## Technical Details

### CDN Libraries

- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Playfair Display + Poppins

### Browser Support

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 8+)

### Local Storage

Progress is automatically saved:

- `giftProgress` - Unlocked gifts
- `currentGiftIndex` - Current position
- `scratchedEras` - Revealed era cards

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --primary-pink: #ff9ec7;
  --secondary-pink: #ffc4dd;
  --light-pink: #ffe5f1;
  --purple: #c597d8;
}
```

### Modify Gifts

Edit the `gifts` array in `script.js`:

```javascript
{
    age: 1,
    era: 1,
    gift: "Gift Name",
    subtitle: "Subtitle",
    message: "Your message here",
    gameId: 1
}
```

### Adjust Scratch Difficulty

Modify `scratchPercentage` in `eras` array in `script.js`:

```javascript
{
    id: 1,
    scratchPercentage: 20,  // 20% to unlock
    ...
}
```

## Deployment

### Local Testing

Simply open `index.html` in a web browser.

### Web Hosting

Upload all files to any web host:

- Ensure all files are in the same directory
- Maintain file structure
- No server-side code required

### GitHub Pages

1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in Settings
4. Access via `https://username.github.io/repo-name`

## Mobile Optimization

- Viewport locked to prevent unwanted zoom
- Touch event handling for all interactions
- Swipe gestures for navigation
- 44px minimum touch targets
- Smooth scrolling and transitions
- GPU-accelerated animations

## Troubleshooting

### Music Not Playing

- Click the music button manually
- Check browser autoplay policy
- Ensure `01.mp3` is in the correct location

### Games Not Loading

- Check browser console for errors
- Ensure all JavaScript files are loaded
- Try refreshing the page

### Progress Not Saving

- Check if localStorage is enabled
- Try a different browser
- Clear cache and reload

### Scratch Cards Not Working

- Ensure touch/mouse events are supported
- Try on a different device
- Check console for canvas errors

## Development

### Adding New Games

1. Create game function in `games.js`
2. Add case to `loadGame()` switch statement
3. Call `onGameComplete()` when game is won
4. Update gift data in `script.js` with new `gameId`

### Modifying Scratch Mechanics

Edit `initScratchCard()` function in `script.js`:

- Adjust brush size (currently 25px radius)
- Change required percentage check
- Modify canvas drawing style

## Performance Tips

- Vanilla JavaScript (no heavy frameworks)
- CSS animations use GPU acceleration
- LocalStorage for instant save/load
- Efficient canvas rendering
- Minimal DOM manipulation

## Credits

- **Design**: Simple, romantic, mobile-first approach
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Playfair Display, Poppins)
- **Games**: Custom vanilla JavaScript implementations

## License

Personal use for gift-giving. Made with love.

---

**Version**: 1.0  
**Created**: 2024  
**Optimized For**: Mobile devices, tablets, and desktops

Made with ♥ for someone special
